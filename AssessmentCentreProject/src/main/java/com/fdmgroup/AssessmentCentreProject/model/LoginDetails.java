package com.fdmgroup.AssessmentCentreProject.model;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class LoginDetails {
	
	private String emailAddress;
	private String password;
	
	public LoginDetails() {
		super();
	}
	
	public String getEmailAddress() {
		return emailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}

	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = encryptPassword(password);
	}
	
	public String encryptPassword(String password) {
		try {
			MessageDigest m = MessageDigest.getInstance("MD5");
			m.update(password.getBytes());
			byte[] bytes = m.digest();
			StringBuilder s = new StringBuilder();  
            for(int i=0; i< bytes.length ;i++)  
            {  
                s.append(Integer.toString((bytes[i] & 0xff) + 0x100, 16).substring(1));  
            }  
            return s.toString();
			
		} catch (NoSuchAlgorithmException e) {
			System.err.println("Failed to hash password");
			e.printStackTrace();
		}
		return null;
	}
	
	
}
