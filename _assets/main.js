import { Application } from "@hotwired/stimulus"

import HelloController from "./controllers/hello_controller"
import ContactController from "./controllers/contact_controller"
import AuthorizeController from "./controllers/authorize_controller"
import NukeController from "./controllers/nuke_controller"

window.Stimulus = Application.start()
Stimulus.register("hello", HelloController)
Stimulus.register("contact", ContactController)
Stimulus.register("authorize", AuthorizeController)
Stimulus.register("nuke", NukeController)
