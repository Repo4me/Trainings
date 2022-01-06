package annotations;

import java.lang.reflect.Method;
import java.lang.reflect.Parameter;

public class AnnotationDemo {

	@Schedule(set=1)
	@Schedule(set=1)
	public void m1(int sumofnos)
	{
		
	}
	public static void main(String[] args) throws NoSuchMethodException, SecurityException {
		Method method = AnnotationDemo.class.getMethod("m1", int.class);
		for(Parameter p : method.getParameters())
		{
			System.out.println(p.getName());
		}
	}
}
