import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.function.Supplier;

public class FunctionalInterfaceDemo {

	// returns true for even nos
	// returns true for nos > 10
	public static int processNos(List<Integer> nos , Predicate<Integer> predicate)
	{
		// iterating over the list and  return the sume of those nos based on the 
		// predicate result
		int sum = 0;
		for(Integer n: nos)	
			if(predicate.test(nos.get(0))) sum+=n;
		return sum;
	}

	public static void main(String[] args) {
		
		List<Integer> list = Arrays.asList(30,50,3,9,90,21);
		Collections.sort(list,(n1,n2)->n1.compareTo(n2));
//		class PI implements Predicate<Integer>
//		{
//			
//		}
		Collections.sort(list, (Integer o1, Integer o2) ->o2.compareTo(o1));
		processNos(list, new Predicate<Integer>() {
			@Override
			public boolean test(Integer t) {
				return t%2==0;
				}
		});
		System.out.println(processNos(list, n->n%2==0));
		processNos(list, n->n>10);
		m1(10, new Generate() {
			@Override
			public void square(int no) {	
			}
			@Override
			public void cube(int n) {
				
			}
		});
		//m1(5, (no)-> System.out.println(no*no));
	}
	
	public static void m1(int no,  Generate generate)
	{
		generate.square(no);
	}

}
