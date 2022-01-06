package com.lti.spring.training.core.model;

public class Topic {

	private Integer topicId;
	private String name;
	private String desc;
	
	
	public Topic(Integer topicId, String name, String desc) {
		super();
		this.topicId = topicId;
		this.name = name;
		this.desc = desc;
	}
	
	public Integer getTopicId() {
		return topicId;
	}
	public void setTopicId(Integer topicId) {
		this.topicId = topicId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	
	
}
