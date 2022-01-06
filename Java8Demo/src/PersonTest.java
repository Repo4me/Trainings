import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.function.Supplier;

public class PersonTest {

	public static void processPerson(List<Person> persons,
			Predicate<Integer> agefilter, 
			Function<Person, String> mapper,
			Consumer<String> block)
	{
		for(Person person:persons)
		{
			if(agefilter.test(person.getAge()))
			{
				String fullname = mapper.apply(person);
				block.accept(fullname);
			}
		}
	}
	
	public static void main(String[] args) {
		List<Person> list = new ArrayList<Person>();
		list.add(new Person("Shalini", "mittal",35));
		list.add(new Person("abc", "ABC",25));
		list.add(new Person("def", "DEF",45));
		list.add(new Person("xyz", "XYZ",30));
		list.add(new Person("pqr", "PQR",37));
		processPerson(list, 
				age->age>30,
				(person)->person.getFirstName()+" "+person.getLastName(), 
				(data)->System.out.println(data));
		Person p1 = list.get(0);
		Supplier<String> fname = p1::getFirstName ;
		
		Function<Person, String> f1 = Person::getFirstName;
		f1.apply(p1);
		
		
	}
	

}














