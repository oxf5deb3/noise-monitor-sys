package com.qlsofti.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @author ${user}
 */
@Controller
@RequestMapping("/user")
public class UserController {

    @RequestMapping("/finduri")
    @ResponseBody
    public String getUrl(){
        return "hellow world.";
    }
}
