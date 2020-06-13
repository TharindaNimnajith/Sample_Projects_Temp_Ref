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
@RequestMapping(value = "/userController")
public class userController {

    @GetMapping(value = "/userMail/{name}/{email}")
    public boolean sendEmail(@PathVariable String name, @PathVariable String email) {

        try {
            final String fromEmail = "fashionstoregtsd@gmail.com";
            final String password = "Fashionstore123";
            final String toEmail = email;


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
            EmailUtil.sendEmail(session, toEmail,"Account has been removed !", "Dear "+ name + ","+"\n\n\t"+"We have removed you as our customer due to unethical use of our website. For further information, please contact our Admin Gnanod Akalanka at " + fromEmail +"\n\n"+"Thank you and Best Regards,"+"\n"+"GSTD Pvt(LTD)." );


            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
