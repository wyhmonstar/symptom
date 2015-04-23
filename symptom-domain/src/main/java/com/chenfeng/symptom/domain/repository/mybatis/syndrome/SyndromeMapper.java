package com.chenfeng.symptom.domain.repository.mybatis.syndrome;

import com.chenfeng.symptom.domain.common.annotation.MyBatisRepository;
import com.chenfeng.symptom.domain.model.mybatis.Syndrome;
import com.chenfeng.symptom.domain.repository.mybatis.CrudMapper;

@MyBatisRepository
public interface SyndromeMapper extends CrudMapper<Syndrome, Long> {

}