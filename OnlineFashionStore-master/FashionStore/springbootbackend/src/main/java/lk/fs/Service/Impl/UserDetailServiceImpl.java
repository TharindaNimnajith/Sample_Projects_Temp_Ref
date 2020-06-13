package lk.fs.Service.Impl;

import lk.fs.Entity.UserDetail;
import lk.fs.Repository.UserDetailRepository;
import lk.fs.Service.UserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserDetailServiceImpl implements UserDetailService {

    @Autowired
    private UserDetailRepository userDetailRepository;
    @Override
    public UserDetail addUser(UserDetail userDetail) {
        return userDetailRepository.save(userDetail);
    }
}
