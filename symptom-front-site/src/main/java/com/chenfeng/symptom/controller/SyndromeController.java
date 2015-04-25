package com.chenfeng.symptom.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.chenfeng.symptom.service.syndrome.SyndromeInput;
import com.chenfeng.symptom.service.syndrome.SyndromeService;

@Controller
@RequestMapping(value = "syndrome")
public class SyndromeController {
    @Autowired
    private SyndromeService syndromeService;
    
    @RequestMapping(value = "create", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public String createSympotm() {
        
        return "syndrome/create";
    }
    
//    @RolesAllowed("ROLE_USER")
    @RequestMapping(value = "create", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public String doCreateSympotm(@Valid SyndromeInput syndromeInput) {
        
        syndromeService.create(syndromeInput);
        return "syndrome/create";
    }
}
