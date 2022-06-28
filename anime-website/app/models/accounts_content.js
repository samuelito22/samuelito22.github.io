const Schema = require("mongoose");
const { account } = require(".");

module.exports = mongoose => {
    const schema_account = mongoose.Schema(
        {
        name: String,
        username: String,
        password: String,
        notes:[
            {
                title: String,
                content: String,
            }
            
        ]
    },
    { timestamps: true }
    );
    schema_account.method("toJSON", function(){
        const { _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const accountsSchema = mongoose.model("account", schema_account);
    return accountsSchema
}
