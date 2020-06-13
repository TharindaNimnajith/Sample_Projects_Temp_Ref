package lk.fs.Entity;

//import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Reference;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import  org.bson.types.ObjectId;

@Document(collection =  "items")
public class Item {

    @Id
    private ObjectId  _id;
    private String itemCode;
    private String itemName;
    private List<BrandCategory> brandCategory;
    private String description;

    public ObjectId get_id() {
        return _id;
    }

    public void set_id(ObjectId  _id) {
        this._id = _id;
    }

    public List<BrandCategory> getBrandCategory() {
        return brandCategory;
    }

    public void setBrandCategory(List<BrandCategory> brandCategory) {
        this.brandCategory = brandCategory;
    }

    public String getItemCode() {
        return itemCode;
    }

    public void setItemCode(String itemCode) {
        this.itemCode = itemCode;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public List<BrandCategory> getBrandCategoryList() {
        return brandCategory;
    }

    public void setBrandCategoryList(List<BrandCategory> brandCategoryList) {
        this.brandCategory = brandCategoryList;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


}
