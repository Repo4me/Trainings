import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.function.Supplier;

public class FunctionalInterfaceThisDemo {

	
	public static void main(String[] args) {
		
	
		m1(10, new Generate() {
			@Override
			public void square(int no) {	
				System.out.println("Anonymous "+this);
			}
			
		});
		//m1(5, (no)-> System.out.println("Lambda "+this));
	}
	
	public void m2()
	{
		m1(5, (no)-> System.out.println("Lambda "+this));
	}
	public static void m1(int no,  Generate generate)
	{
		generate.square(no);
	}

}
