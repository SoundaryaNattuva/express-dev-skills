import mongoose from "mongoose"

const mySchema = mongoose.Schema

const skillsSchema = new mySchema ({
  text: String,
  done: Boolean,
})

const Skill = mongoose.model('Skills', skillsSchema)

export {
  Skill
}