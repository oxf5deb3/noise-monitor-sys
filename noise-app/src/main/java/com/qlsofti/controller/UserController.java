package com.qlsofti.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author ${user}
 */
@Controller
public class UserController {

    @RequestMapping("/finduri")
    public String getUrl(){
        return "index";
    }
}
