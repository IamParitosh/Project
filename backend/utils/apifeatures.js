class ApiFeatures{
    constructor(query, queryStr){
        this.query = queryId;
        this.queryStr = queryStr
    }

    search() {
        const keyword = this.queryStr.keyword ? {
            name:{
                $regex: this.queryStr.keyword,
                $options: "1",
            },
        }
        :{};

        console.log(keyword);
        this.query = this.query.find({ ...keyword });
        return this;
    }
}

module.exports = ApiFeatures;