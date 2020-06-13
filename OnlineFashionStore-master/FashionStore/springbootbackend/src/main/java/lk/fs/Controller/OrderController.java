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
@RequestMapping(value = "/OrderController")
public class OrderController {

    @GetMapping(value = "/sendMail/{mail}/{orderId}/{itemTotal}/{fullDiscount}")
    public boolean sendEmail(@PathVariable String mail, @PathVariable String orderId, @PathVariable float itemTotal,@PathVariable float fullDiscount) {

        System.out.println("GGGGGGGGG");
        System.out.println("mail" + mail);
        System.out.println("orderId" + orderId);
        System.out.println("itemTotal" + itemTotal);
        System.out.println("itemTotal" + fullDiscount);
        try {
            final String fromEmail = "fashionstoregtsd@gmail.com"; //requires valid gmail id
            final String password = "Fashionstore123"; // correct password for gmail id
            final String toEmail = mail; // can be any email id

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
            EmailUtil.sendEmail(session, toEmail,"Confirmation of Order", "You have been succesfully purchased the items."+"\n"+"Order Id  :"+orderId+"\n"+"Item Total  :"+itemTotal+"\n"+"Purchase Date  :"+now +"\n"+"Total Discount  :"+fullDiscount+"\n"+"Thank you for Shopping on GSTD Pvt(LTD).");


            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
