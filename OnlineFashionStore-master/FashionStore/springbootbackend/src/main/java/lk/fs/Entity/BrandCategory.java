package lk.fs.Entity;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Reference;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection =  "brandcategories")
public class BrandCategory {

    @Id
    private ObjectId _id;
    @Reference
    private List<Brand> brandCode;
    @Reference
    private List<Category> categoryCode;

    public ObjectId get_id() {
        return _id;
    }

    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public List<Brand> getBrandCode() {
        return brandCode;
    }

    public void setBrandCode(List<Brand> brandCode) {
        this.brandCode = brandCode;
    }

    public List<Category> getCategoryCode() {
        return categoryCode;
    }

    public void setCategoryCode(List<Category> categoryCode) {
        this.categoryCode = categoryCode;
    }
}
