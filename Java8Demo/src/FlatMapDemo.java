

import java.lang.reflect.Method;
import java.lang.reflect.Parameter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

import streams.Address;
import streams.Person;

public class FlatMapDemo {

	public static void main(String[] args) throws NoSuchMethodException, SecurityException {
		Method method = A.class.getMethod( "m1", int.class );
	       // System.out.println(method.getParameter().getName());
	        for( final Parameter parameter: method.getParameters() ) {
	            System.out.println( "Parameter: " + parameter.getName() );
	        }
		List<Person> person = new ArrayList<>();
	person.add(new Person("Shalini",24,Arrays.asList(new Address("Mumbai"))));
	person.add(new Person("Manish",26,Arrays.asList(new Address("Delhi"))));
	person.add(new Person("Palash",28,Arrays.asList(new Address("Mumbai"))));
	person.add(new Person("Amit",27,Arrays.asList(new Address("Chennai"))));
	person.add(new Person("Asha",33,Arrays.asList(new Address("Pune"))));
	person.add(new Person("Kshitij",25,Arrays.asList(new Address("Mumbai"))));
	person.add(new Person("Ashok",22,Arrays.asList(new Address("Nagpur"))));
	person.add(new Person("Pooja",34,Arrays.asList(new Address("Bhopal"))));
	person.add(new Person("Deepti",45,Arrays.asList(new Address("Mumbai"))));
	person.add(new Person("Ajit",34,Arrays.asList(new Address("Mumbai"))));// TODO Auto-generated method stub

	person.stream().filter(members->members.getName().startsWith("A"))
    .forEach(System.out::println);        
	
	Stream<Person> perstream = person.stream();
	Stream<Address> addrstream =  
                        perstream.flatMap(p->p.getAddress().stream());
	addrstream.forEach(System.out::println);
	}

}

class A{
	public static void m1(int storenumber)
	{
		
	}
}

