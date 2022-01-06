import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.function.Supplier;

public class MethodReferenceDemo{

	
	
	public static void m1(Supplier<Integer> supply)
	{
		System.out.println(supply.get());
	}
	public static void main(String[] args) {
	
		String s1 = "Techgatha";
//		Supplier<Integer> nofofchars =  new Supplier<Integer>() {
//
//			@Override
//			public Integer get() {
//				// TODO Auto-generated method stub
//				return s1.length();
//			}
//		};
		//Supplier<Integer> nofofchars = ()->s1.length();
		Supplier<Integer> nofofchars = s1::length;
		System.out.println();
		m1("Hello"::length);

		Function<String, String> f1 = (s)->{
			System.out.println();
			return s.substring(8);
		};
		// s1 paramter->int result->string
		Function<Integer, String> f = s1::substring;
		System.out.println(f.apply(3));
		
		BiFunction<String, Integer, String> f2 = String::substring;
		System.out.println(f2.apply("Shalini Mittal", 6));
		
	}	
	
}





