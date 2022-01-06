package streams;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class StreamDemo {

	public Optional<PersonInfo> createPerson()
	{
		return Optional.of(new PersonInfo());
	}
	public static void main(String[] args) {
		
		Stream<Integer> nos=Stream.of(10,21,30,41,53,60,70,83,90,100);
		int total = nos.filter(no->no%2==0)
		.map(no->(no+10))
		.skip(2)
		.reduce(0,(sum,no)->{
			System.out.println(sum+" "+no);
			return sum+no;
		});
		System.out.println(total);
		//.forEach(System.out::println);
		;
		
		
//		Stream<Integer> nos = Stream.of(1,2,3,4,5,6,7,8,9,10);
//		nos.filter(no->{
//			System.out.println("Filtering "+no);
//			return no%2==0;
//		}).forEach(System.out::println);

		List<PersonInfo> list = new ArrayList<PersonInfo>();
		list.add(new PersonInfo("Shalini", "mittal",35));
		list.add(new PersonInfo("abc", "ABC",25));
		list.add(new PersonInfo("abc", "ABC",25));
		list.add(new PersonInfo("def", "DEF",45));
		list.add(new PersonInfo("xyz", "XYZ",30));
		list.add(new PersonInfo("pqr", "PQR",37));
		
		List<PersonInfo> persons = list.stream().distinct().collect(Collectors.toList());
		
		Map<Integer,PersonInfo> map =
				list.stream()
				.distinct()
				.collect(Collectors
						.toMap(p->list.indexOf(p), person->person));
		
		for(Integer key:map.keySet())
		{
			System.out.println(key+ " "+map.get(key));
		}
		
		System.out.println(persons.size());
//		Optional<Person> p1 = list.stream().filter(person->person.getFirstName().contains("g"))
//		.findFirst();
//		
//		System.out.println(p1.get());
		
		
//		
//		list.stream().filter(person->person.getAge() > 30)
//		.map(person-> person.getFirstName()+" "+person.getLastName())
//		.forEach(System.out::println);
		
//		List<Person> persons = list.stream().
//				filter(person->person.getAge() > 30)
//				.map(person-> {
//					Person p1 = new Person() {
//						
//						public String fullname()
//						{
//							return person.getFirstName()+" "+person.getLastName();
//						}
//					};
//					return p1;
//				})
//				.collect(Collectors.toList());
//		
//		for(Person person:persons)
//		{
//			System.out.println(person);
//		}
	}

}











