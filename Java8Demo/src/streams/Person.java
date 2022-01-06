package streams;

import java.util.List;

public class Person implements Comparable<Person>{

	String name;
	int age;	
	List<Address> address;
	public Person() {
		}
	public Person(String name, int age, List<Address> address) {
		super();
		this.name = name;
		this.age = age;
		this.address = address;
	}
	public List<Address> getAddress() {
		return address;
	}
	public void setAddress(List<Address> address) {
		this.address = address;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	@Override
	public String toString() {
		return "Person [name=" + name + ", age=" + age + ",address=" + address
				+ "]";
	}
       @Override
	public int compareTo(Person o) {
		return name.compareTo(o.name);
	}

}
