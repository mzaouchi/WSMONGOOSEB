const Contact = require("../Models/Contact")

exports.addContact = async(req,res)=>{
    try {

        const found = await Contact.findOne({email : req.body.email})

        if(found){
            return res.status(400).send("User already exists")
        }

        const contactToSave = new Contact(req.body)

        await contactToSave.save()

        res.status(200).send({msg :"Contact Saved", contactToSave})

    } catch (error) {
        res.status(500).send("Could not add Contact")
    }
}

exports.getContacts = async(req,res)=>{
    try {
        const contacts = await Contact.find()

        res.status(200).send({msg:"Contacts List",contacts})
    } catch (error) {
        res.status(500).send("Could not get Contacts")
    }
}

exports.getOneContact = async(req,res)=>{
    try {
        const {id} = req.params

        // const found = await Contact.findOne({_id : id})
        // console.log(found)
        // if(!found){
        //     return res.status(400).send('Wrong id')
        // }
       
        const contact = await Contact.findById(id)
        
   

        res.status(200).send({msg :"Contact",contact})
    } catch (error) {
        res.status(500).send('Could not get Contact')
    }
}

exports.deleteContact = async(req,res)=>{
    try {
        const {id} = req.params

        await Contact.findByIdAndDelete(id)

        res.status(200).send('Contact Deleted')
    } catch (error) {
        res.status(500).send('Could not delete Contact')
    }
}

exports.updateContact = async(req,res)=>{
    try {
        const {id} = req.params

        await Contact.findByIdAndUpdate(id,{$set : req.body})

        res.status(200).send('Contact updated')
    } catch (error) {
        res.status(500).send('Could not update Contact')
    }
}