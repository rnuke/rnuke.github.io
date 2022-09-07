import { Application } from "@hotwired/stimulus"

import HelloController from "./controllers/hello_controller"
import ContactController from "./controllers/contact_controller"

window.Stimulus = Application.start()
Stimulus.register("hello", HelloController)
Stimulus.register("contact", ContactController)
