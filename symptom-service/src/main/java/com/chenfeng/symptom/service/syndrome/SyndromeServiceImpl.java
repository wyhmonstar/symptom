package com.chenfeng.symptom.service.syndrome;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.chenfeng.symptom.domain.model.mybatis.Syndrome;
import com.chenfeng.symptom.domain.repository.mybatis.syndrome.SyndromeMapper;
import com.chenfeng.symptom.service.CrudServiceImpl;

@Service
public class SyndromeServiceImpl extends CrudServiceImpl<Syndrome, Long, SyndromeMapper> implements SyndromeService {

    @Resource
    @Override
    public void setRepository(SyndromeMapper syndromeMapper) {
        super.setRepository(syndromeMapper);
    }
}
