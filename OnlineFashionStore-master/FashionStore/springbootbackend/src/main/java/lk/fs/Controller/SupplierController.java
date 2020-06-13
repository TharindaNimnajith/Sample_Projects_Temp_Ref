package lk.fs.Controller;

import lk.fs.Service.EmailUtil;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;

@CrossOrigin
@RestController
@RequestMapping(value = "/supplierController")

public class SupplierController {

    @GetMapping(value = "/sendMail/{supplier}/{email}/{newQuantity}/{itemSize}/{itemName}")
    public boolean sendEmail(@PathVariable String supplier,@PathVariable String email, @PathVariable int newQuantity,@PathVariable String itemSize,@PathVariable String itemName) {

        System.out.println("GGGGGGGGG");
        System.out.println("mail" + email);
        System.out.println("newQuantity" + newQuantity);
//        System.out.println("itemSize" + itemSize);
//        System.out.println("itemColor" + itemColor);
//        System.out.println("quantity" + quantity);

        try {
            final String fromEmail = "fashionstoregtsd@gmail.com"; //requires valid gmail id
            final String password = "Fashionstore123"; // correct password for gmail id
            final String toEmail = email; // can be any email id

            System.out.println("TLSEmail Start");
            Properties props = new Properties();
            props.put("mail.smtp.host", "smtp.gmail.com"); //SMTP Host
            props.put("mail.smtp.port", "587"); //TLS Port
            props.put("mail.smtp.auth", "true"); //enable authentication
            props.put("mail.smtp.starttls.enable", "true"); //enable STARTTLS

            //create Authenticator object to pass in Session.getInstance argument
            Authenticator auth = new Authenticator() {
                //override the getPasswordAuthentication method
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication(fromEmail, password);
                }
            };
            Session session = Session.getInstance(props, auth);

            LocalDateTime now = LocalDateTime.now();
            EmailUtil.sendEmail(session, toEmail,"Requesting Products", "Dear Mr/Mrs,"+"\n"+"We are GSTD Pvt(LTD) who is a regular customer of you. As a company we are"+"\n"+
                    "satisfying of your "+supplier+" products. Now, in our stock has a less number of "+"\n"+
                    itemName+" items of your products. We are looking for number of new "+newQuantity+" items from "+"\n"+
                    itemName+" item in size \""+itemSize+"\"."+"\n"+
                    "Please provide details about the product specified here, as well as any"+"\n"+
                    "additional offerings and new items that you have. We look forward to hearing from you soon."+"\n"+
                    "Regards,"+"\n"+"[GSTD Pvt(LTD)]");


            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
