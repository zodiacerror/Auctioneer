

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");



const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
// app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Connect to the database



app.listen(PORT, async () => {
    try {
        await mongoose.connect("mongodb+srv://auctioneer:auctioneer_123@cluster0.ffl1t2y.mongodb.net/dbAuctioneer");
        console.log("db connection established");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }


    console.log(`Server started on port ${PORT}`)
})


app.get("/Test", (req, res) => {
    res.send({ msg: 'hello' })

})

//Admin Schema


const adminSchemaStucture = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
});


const Admin = mongoose.model('adminSchema', adminSchemaStucture);


// Admin Insert

app.post("/Admin", async (req, res) => {


    const { name, email, password } = req.body
    try {
        // let admin = await Admin.findOne({ email })

        // if (admin) {
        //     return res
        //         .status(400)
        //         .json({ errors: [{ msg: 'Admin already exists' }] })
        // }

        let admin = new Admin({
            name,
            email,
            password
        })

        await admin.save()

        res.json({ message: 'Admin inserted successfully' })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }

})


// select Admin

app.get("/Admin", async (req, res) => {
    const admin = await Admin.find()
    res.send({ admin })


})


//Delete Admin

app.delete('/Admin/:id', async (req, res) => {
    try {
        const Id = req.params.id;
        console.log(Id);


        const deletedAdmin = await Admin.findByIdAndDelete(Id);

        if (!deletedAdmin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        res.json({ message: 'Admin deleted successfully', deletedAdmin });
    } catch (err) {
        console.error('Error deleting Admin:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

//Admin update

app.put("/updateAdmin/:id", async (req, res) => {
    const id = req.params.id
        try {
            const { name, email, password } = req.body;
    const updatedAdmin = await Admin.findByIdAndUpdate(
        id,
        { name, email, password },
        { new: true }
    );
    res.json(updatedAdmin)
}
catch (err) {
    console.error(err.message);
    res.status(500).send("server error");



}
    });



//User Schema

const userSchemastructure = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    photo: {
        type: String,
        require: true
    },
    contact: {
        type: String,
        require: true
    },
    proof: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    },


});
// Insert User
const User = mongoose.model('userSchema', userSchemastructure);


app.post("/User", async (req, res) => {


    const { name, email, password, photo, contact, proof, status } = req.body
    try {
        // let admin = await User.findOne({ email })

        // if (user) {
        //     return res
        //         .status(400)
        //         .json({ errors: [{ msg: 'User already exists' }] })
        // }

        let user = new User({
            name,
            email,
            password,
            photo,
            contact,
            proof,
            status
        })

        await user.save()

        res.json({ message: 'user inserted successfully' })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }

})


// select User

app.get("/User", async (req, res) => {
    const user = await User.find()
    res.send({ user })


})

//Delete User

app.delete('/User/:id', async (req, res) => {
    try {
        const Id = req.params.id;
        console.log(Id);


        const deletedUser = await User.findByIdAndDelete(Id);

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User deleted successfully', deletedUser });
    } catch (err) {
        console.error('Error deleting User:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});



//Dealer Schema

const dealerSchemastructure = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    contact: {
        type: String,
        require: true
    },
    proof: {
        type: String,
        require: true
    },
    photo: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    },

});


//Insert Dealer

const Dealer = mongoose.model('dealerSchema', dealerSchemastructure);


app.post("/Dealer", async (req, res) => {


    const { name, email, password, photo, contact, proof, status } = req.body
    try {
        // let dealer = await Dealer.findOne({ email })

        // if (dealer) {
        //     return res
        //         .status(400)
        //         .json({ errors: [{ msg: 'dealer already exists' }] })
        // }

        let dealer = new Dealer({
            name,
            email,
            password,
            photo,
            contact,
            proof,
            status
        })

        await dealer.save()

        res.json({ message: 'dealer inserted successfully' })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }

})

// select Dealer

app.get("/Dealer", async (req, res) => {
    const dealer = await Dealer.find()
    res.send({ dealer })


})

//Delete Dealer

app.delete('/Dealer/:id', async (req, res) => {
    try {
        const Id = req.params.id;
        console.log(Id);


        const deletedDealer = await Dealer.findByIdAndDelete(Id);

        if (!deletedDealer) {
            return res.status(404).json({ message: 'Dealer not found' });
        }

        res.json({ message: 'Dealer deleted successfully', deletedDealer });
    } catch (err) {
        console.error('Error deleting Dealer:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});







//Lot Schema


const lotSchemastructure = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    minprice: {
        type: String,
        require: true
    },
    antique: {
        type: String,
        require: true
    },
    quantity: {
        type: String,
        require: true
    },
    datetime: {
        type: String,
        require: true
    },

});
//Insert lot

const Lot = mongoose.model('lotSchema', lotSchemastructure);

app.post("/Lot", async (req, res) => {


    const { name, price, minprice, antique, quantity, datetime } = req.body
    try {


        let lot = new Lot({
            name,
            price,
            minprice,
            antique,
            quantity,
            datetime
        })

        await lot.save()

        res.json({ message: 'lot inserted successfully' })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }

})
// select Lot

app.get("/Lot", async (req, res) => {
    const lot = await Lot.find()
    res.send({ lot })


})


//AuctionHead Schema

const auctionheadSchemastructure = new mongoose.Schema({
    token: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },

});

//Insert AuctionHead

const Auctionhead = mongoose.model('auctionheadSchema', auctionheadSchemastructure);

app.post("/Auctionhead", async (req, res) => {


    const { token, date, price } = req.body
    try {


        let auctionhead = new Auctionhead({

            price,
            token,
            date
        })

        await auctionhead.save()

        res.json({ message: 'auctionhead  inserted successfully' })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }

})

// select Auction Head

app.get("/Auctionhead", async (req, res) => {
    const auctionhead = await Auctionhead.find()
    res.send({ auctionhead })


})


//Category Schema

const categorySchemastructure = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
});

//Insert category

const Category = mongoose.model('categorySchema', categorySchemastructure);

app.post("/Category", async (req, res) => {


    const { name } = req.body
    try {


        let category = new Category({

            name
        })

        await category.save()

        res.json({ message: 'category inserted successfully' })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }

})
// select Category

app.get("/Category", async (req, res) => {
    const category = await Category.find()
    res.send({ category })


})

//Delete Category

app.delete('/Category/:id', async (req, res) => {
    try {
        const Id = req.params.id;
        console.log(Id);


        const deletedCategory = await Category.findByIdAndDelete(Id);

        if (!deletedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.json({ message: 'Category deleted successfully', deletedCategory });
    } catch (err) {
        console.error('Error deleting Category:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});



//AuctionBody Schema

const auctionbodySchemastructure = new mongoose.Schema({
    lotauctionbodyprice: {
        type: String,
        require: true
    },

});

//Insert Auction Body

const Auctionbody = mongoose.model('auctionbodySchema', auctionbodySchemastructure)
app.post("/Auctionbody", async (req, res) => {


    const { lotauctionbodyprice } = req.body
    try {


        let auctionbody = new Auctionbody({

            lotauctionbodyprice
        })

        await auctionbody.save()

        res.json({ message: 'auctionbody inserted successfully' })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }

})
// select Auction Body

app.get("/Auctionbody", async (req, res) => {
    const auctionbody = await Auctionbody.find()
    res.send({ auctionbody })


})


//Feedback Schema

const feedbackSchemastructure = new mongoose.Schema({
    content: {
        type: String,
        require: true
    },
});

//Insert Feedback

const Feedback = mongoose.model('feedbackSchema', feedbackSchemastructure)
app.post("/Feedback", async (req, res) => {


    const { content } = req.body
    try {


        let feedback = new Feedback({

            content
        })

        await feedback.save()

        res.json({ message: 'feedback inserted successfully' })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }

})

// select Feedback

app.get("/Feedback", async (req, res) => {
    const feedback = await Feedback.find()
    res.send({ feedback })


})


//Complaint Schema

const complaintSchemastructure = new mongoose.Schema({
    content: {
        type: String,
        require: true
    },
    replay: {
        type: String,
        require: true
    },
});

//Insert Complaint

const Complaint = mongoose.model('complaintSchema', complaintSchemastructure)
app.post("/Complaint", async (req, res) => {
    const { content, replay } = req.body
    try {


        let complaint = new Complaint({

            content,
            replay
        })

        await complaint.save()

        res.json({ message: 'complaint inserted successfully' })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }

})

// select Complaint

app.get("/Complaint", async (req, res) => {
    const complaint = await Complaint.find()
    res.send({ complaint })


})

//State Schema

const stateSchemastructure = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
});

//Insert State

const State = mongoose.model('stateSchema', stateSchemastructure)
app.post("/State", async (req, res) => {
    const { name } = req.body
    try {


        let state = new State({

            name
        })

        await state.save()

        res.json({ message: 'state inserted successfully' })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }

})
// select State

app.get("/State", async (req, res) => {
    const state = await State.find()
    res.send({ state })


})

//District Schema

const districtSchemastructure = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
});

//Insert District

const District = mongoose.model('districtSchema', districtSchemastructure)
app.post("/District", async (req, res) => {
    const { name } = req.body
    try {


        let district = new District({

            name
        })

        await district.save()

        res.json({ message: 'district inserted successfully' })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }

})

// select District

app.get("/District", async (req, res) => {
    const district = await District.find()
    res.send({ district })


})

//Place Schema

const placeSchemastructure = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
});

//Insert place


const Place = mongoose.model('placeSchema', placeSchemastructure)
app.post("/Place", async (req, res) => {
    const { name } = req.body
    try {


        let place = new Place({

            name
        })

        await place.save()

        res.json({ message: 'place inserted successfully' })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }

})

// select Lot

app.get("/Place", async (req, res) => {
    const place = await Place.find()
    res.send({ place })


})



//Gallery Schema

const gallerySchemastructure = new mongoose.Schema({
    image: {
        type: String,
        require: true
    },
});

//Insert gallery

const Gallery = mongoose.model('gallerySchema', gallerySchemastructure)
app.post("/Gallery", async (req, res) => {
    const { image } = req.body
    try {


        let gallery = new Gallery({

            image
        })

        await gallery.save()

        res.json({ message: 'gallery inserted successfully' })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }

})

// select Gallery

app.get("/Gallery", async (req, res) => {
    const gallery = await Gallery.find()
    res.send({ gallery })


})

