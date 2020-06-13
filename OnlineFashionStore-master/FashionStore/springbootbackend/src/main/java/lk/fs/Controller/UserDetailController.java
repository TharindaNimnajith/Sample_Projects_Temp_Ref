package lk.fs.Controller;

import lk.fs.Entity.ItemColor;
import lk.fs.Entity.UserDetail;
import lk.fs.Service.UserDetailService;
import org.apache.catalina.User;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/UserDetailController")
public class UserDetailController {

    @Autowired
    private UserDetailService userDetailService;

    @PostMapping(value = "addUser", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public UserDetail addUser(@RequestParam("file") MultipartFile file, @RequestParam("firstName") String firstName, @RequestParam("lastName") String lastName, @RequestParam("phoneNumber") String phoneNumber, @RequestParam("gender") String gender, @RequestParam("email") String email,@RequestParam("password") String password, @RequestParam("dob") String dob,@RequestParam("male") String male,@RequestParam("female") String female) {

        System.out.println("Gnanod");
        UserDetail userDetail = new UserDetail();
        try {
            userDetail.setImage(file.getBytes());
            userDetail.setFirstName(firstName);
            userDetail.setLastName(lastName);
            userDetail.setPhoneNumber(phoneNumber);
            userDetail.setGender(gender);
            userDetail.setEmail(email);
            userDetail.setPassword(password);
            userDetail.setDob(dob);
            userDetail.setMale(male);
            userDetail.setFemale(female);



        }catch (IOException e) {
            e.printStackTrace();
        }
        UserDetail u1 = userDetailService.addUser(userDetail);
        System.out.println("JJJJJJ");
        System.out.println(u1.getDob());

        System.out.println("JJJJJJ");
        return u1;
    }
}
