package lk.fs.Entity;


import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection =  "brands")
public class Brand {

    @Id
    private ObjectId _id;
    private String brandCode;
    private String brandName;
    private double sellingDiscount;

    public ObjectId get_id() {
        return _id;
    }

    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public String getBrandCode() {
        return brandCode;
    }

    public void setBrandCode(String brandCode) {
        this.brandCode = brandCode;
    }

    public String getBrandName() {
        return brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }

    public double getSellingDiscount() {
        return sellingDiscount;
    }

    public void setSellingDiscount(double sellingDiscount) {
        this.sellingDiscount = sellingDiscount;
    }
}
