const users = [
    {
        name : "Kunal",
        age : 23
    },
    {
        name : "Kunal2",
        age : 23
    },
    {
        name : "Kunal3",
        age : 23
    },
    {
        name : "Kunal4",
        age : 23
    },
]

const resolvers = {
    Query :  {
        hello() {
            return "Hello World!"
        },
        id() {
            return "231"
        },
        user(){
        return {
            name : "Kunal",
            age : 23
        }
        },
        getAddition(parent , args){
            return parseInt(args.numer1)+parseInt(args.numer1);
        },
        getBuildingBlocks(){
            return [1,2,3,4,5]
        },
        getUser(){
            return users;
        },

        getArrayofArry(){
            return[users , users ,users]
        }
    }
}

export default resolvers