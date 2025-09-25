import { join } from 'path';

export class Template extends AventusTemplate {
    protected override meta(): TemplateInfo {
        return {
            name: "Laravel.Http Function",
            description: "Create an http function",
            version: "1.0.0",
            allowQuick: true
        };
    }
    protected override async run(destination: string): Promise<void> {
        let name = await this.input({
            title: "Provide a name for your function (ex : Remote/Package/Publish)",
        });
        if(!name) return;

        let useError = false;
        let useRequest = false;
        let useResponse = false;

        const files = await this.selectMultiple([
            {
                label: "Error",
                detail: "Use custom error code",
                picked: true
            },
            {
                label: "Request",
                detail: "Use custom request type",
                picked: true
            },
            {
                label: "Response",
                detail: "Use custom response type",
                picked: true
            },
        ], {});

        if(!files) return;
        for(let file of files) {
            if(file.label == "Error") {
                useError = true;
            }
            else if(file.label == "Request") {
                useRequest = true;
            }
            else if(file.label == "Response") {
                useResponse = true;
            }
        }

        const _namespace = "App\\Http\\Controllers\\" + name.replace(/\//g, "\\");
        this.registerVar("path", name);
        this.registerVar("_namespace", _namespace);

        this.registerVar("rename", name.replace(/\//g, "") + "Controller");

        this.destination = join(this.workspacePath, "app", "Http", "Controllers");

        await this.writeFile((config) => {
            if(config.templatePath.endsWith("Controller.php")) {
                if(!useError && !useResponse) {
                    config.content = config.content.replace(": Error|Response", ": ");
                }
                else if(!useError && useResponse) {
                    config.content = config.content.replace(": Error|Response", ": Response");
                }
                else if(useError && !useResponse) {
                    config.content = config.content.replace(": Error|Response", ": ");
                }

                if(!useResponse) {
                    config.content = config.content.replace("return new Response();", "return;");
                }

                if(!useRequest) {
                    config.content = config.content.replace("Request $request", "");
                }
            }
            if(!useError && config.templatePath.endsWith("Error.php")) {
                return false;
            }
            if(!useError && config.templatePath.endsWith("ErrorEnum.php")) {
                return false;
            }
            if(!useRequest && config.templatePath.endsWith("Request.php")) {
                return false;
            }
            if(!useResponse && config.templatePath.endsWith("Response.php")) {
                return false;
            }
            return;
        });

        this.openFile(name + "/Controller.php");
    }

}