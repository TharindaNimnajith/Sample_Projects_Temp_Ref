package lk.fs.Controller;
import lk.fs.Entity.Item;
import lk.fs.Service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@CrossOrigin
@RestController
@RequestMapping(value = "/ItemController")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @PostMapping(value = "addItem",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Item addMakeModel(@RequestParam("file") MultipartFile file ,@RequestParam("itemCode") String itemCode,@RequestParam("itemName") String itemName,@RequestParam("description") String description,@RequestParam("brandCode") String brandCode,@RequestParam("categoryCode") String categoryCode) {


        Item itemDetails = new Item();
//        try {
//            itemDetails.setImage(file.getBytes());
//            itemDetails.setBrandCode(brandCode);
//            itemDetails.setItemCode(itemCode);
//            itemDetails.setItemName(itemName);
//            itemDetails.setDescription(description);
//            itemDetails.setCategoryCode(categoryCode);
//
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
        return itemService.addItem(itemDetails);

    }



}
