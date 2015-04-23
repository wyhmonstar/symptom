package com.chenfeng.symptom.service.syndrome;

import javax.annotation.Resource;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.chenfeng.symptom.common.constant.Constant;
import com.chenfeng.symptom.domain.model.mybatis.Syndrome;
import com.chenfeng.symptom.domain.model.mybatis.SyndromeElement;
import com.chenfeng.symptom.domain.repository.mybatis.syndrome.SyndromeMapper;
import com.chenfeng.symptom.domain.repository.mybatis.syndrome_element.SyndromeElementMapper;
import com.chenfeng.symptom.service.CrudServiceImpl;

@Service
@Transactional(readOnly = true)
public class SyndromeServiceImpl extends CrudServiceImpl<Syndrome, Long, SyndromeMapper> implements SyndromeService {
    @Resource
    private SyndromeElementMapper syndromeElementMapper;
    
    @Resource
    @Override
    public void setRepository(SyndromeMapper syndromeMapper) {
        super.setRepository(syndromeMapper);
    }

    @Override
    @Transactional
    public void create(SyndromeInput syndromeInput) {
        Syndrome syndrome = new Syndrome();
        SyndromeElement syndromeElement = new SyndromeElement();
        BeanUtils.copyProperties(syndromeInput, syndrome);
        BeanUtils.copyProperties(syndromeInput, syndromeElement);
        syndromeElement.setIsRelate(Constant.SYNDROME_ELEMENT_RELATE_TRUE);
        repository.insertSelective(syndrome);
        syndromeElementMapper.insertSelective(syndromeElement);
    }
}
