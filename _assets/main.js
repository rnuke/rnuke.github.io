import { Application } from "@hotwired/stimulus"

import AuthorizeController from "./controllers/authorize_controller"
import NukeController from "./controllers/nuke_controller"

window.Stimulus = Application.start()
Stimulus.register("authorize", AuthorizeController)
Stimulus.register("nuke", NukeController)
