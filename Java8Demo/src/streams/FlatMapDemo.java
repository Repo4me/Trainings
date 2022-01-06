package streams;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;


public class FlatMapDemo {

	public static void main(String[] args) {
		
		
		List<Integer> nos = Arrays.asList(1,2,3,4,5,6);
		List<List<Integer>> nos2d =
				nos.stream()
				.map(no -> Arrays.asList(no-1, no, no+1))
				.collect(Collectors.toList());
		
		System.out.println(nos2d);
		List<Integer> nos2dflatten =
				nos.stream()
				.flatMap(no -> Arrays.asList(no-1, no, no+1).stream())
				.collect(Collectors.toList());
		
		System.out.println(nos2dflatten);
		

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
		person.add(new Person("Ajit",34,Arrays.asList(new Address("Mumbai"))));
		
		//Stream<Person> stream = person.stream();
		person.stream().flatMap(p->p.getAddress()
				.stream()).map(add->add.getCity()).distinct().forEach(System.out::println);
		System.out.println();
		person.stream().flatMap(p->p.getAddress()
				.stream()).map(add->add.getCity()).forEach(System.out::println);
		
		
	}

}







