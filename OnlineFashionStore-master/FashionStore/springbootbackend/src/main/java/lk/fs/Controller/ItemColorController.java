package lk.fs.Controller;

import lk.fs.Entity.Item;
import lk.fs.Entity.ItemColor;
import lk.fs.Service.ItemColorService;
import lk.fs.Service.ItemService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/ColorsController")
public class ItemColorController {

    public ItemColorController(){
        System.out.println("Gnanod");
    }
    @Autowired
    private ItemColorService itemColorService;
    @Autowired
    private ItemService itemService;

    @PostMapping(value = "addItemColor",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ItemColor addItemColorDetails(@RequestParam("file") MultipartFile file , @RequestParam("itemCode") List<ObjectId> itemCode, @RequestParam("itemSize") String itemSize, @RequestParam("itemColor") String itemColor, @RequestParam("itemColorsId") String itemColorsId) {


        ItemColor itemColorDetails = new ItemColor();
        try {
            itemColorDetails.setImage(file.getBytes());
            itemColorDetails.setItemCode(itemCode);
            itemColorDetails.setItemColor(itemColor);
            itemColorDetails.setItemSize(itemSize);
            System.out.println("itemColorsId :"+itemColorsId);
            itemColorDetails.setItemColorsId(itemColorsId);

        }catch (IOException e) {
            e.printStackTrace();
        }
        return itemColorService.addItemColorDetails(itemColorDetails);

    }

    @PostMapping(value = "addItemColorG")
    public String checkMethod(@RequestBody String name){

        return name;
    }


    @GetMapping(value = "getAll")
    public List<ItemColor> getAll(@RequestBody String name){

        return itemColorService.getAll();
    }
}



