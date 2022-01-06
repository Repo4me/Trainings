package streams;

public class Address {


	String city;
	public Address(String city) {
		super();
		this.city = city;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	@Override
	public String toString() {
		return "City : " + city ;
	}
}
