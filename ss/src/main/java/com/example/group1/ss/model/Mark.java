package com.example.group1.ss.model;

public class Mark {
    private int id;
    private String name;
    private int value;

    public Mark (int id, String name, int value) {
        this.id = id;
        this.name = name;
        this.value = value;
}

    public int getId() {
        return id;
    }

    public void setId(){
        this.id = id;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public int getValue(){
        return value;
    }

    public void setValue(int value){
        this.value = value;
    }
}