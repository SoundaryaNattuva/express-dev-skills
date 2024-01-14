import { Skill } from '../models/skills.js'

function newSkill(req, res){
  res.render('skills/new')
}

function create(req, res){
  req.body.done = false
  Skill.create(req.body)
  .then(skills => {
		// Notice we are doing a redirect here!
    console.log("skill created")
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function show(req, res){
  Skill.findById(req.params.skillId)
  .then(skills => {
    res.render('skills/show', {
      skills: skills
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function index(req, res) {
  console.log("this is running 🔥🔥🔥🔥")
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills: skills,
      time: req.time,
      title: 'Skills of an Engineer'
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function deleteSkill(req, res){
  Skill.findByIdAndDelete(req.params.skillId)
  .then(todo => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}


export {
  newSkill as new,
  create,
  show,
  index,
  deleteSkill as delete
}