package com.chenfeng.symptom.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.chenfeng.symptom.domain.model.mybatis.Syndrome;
import com.chenfeng.symptom.service.syndrome.SyndromeService;

@Controller
public class SyndromeController {
    @Autowired
    private SyndromeService syndromeService;
    
    @RequestMapping(value = "create", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public String createSympotm() {
        Syndrome syndrome = new Syndrome();
        syndrome.setSymptomName("symptomName");
        syndrome.setDescription("description");
        syndrome.setSyndromeElementStart("syndromeElementStart");
        syndrome.setSyndromeElementEnd("syndromeElementEnd");
        
        syndromeService.create(syndrome);
        
        return "test";
    }
}
