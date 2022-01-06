import { Topic } from './topicmodel'

export let topics = [
    new Topic(1, 'java', 'trending language', 'oops'),
    new Topic(2, 'c', 'first choice for compilers', 'lang'),
    new Topic(3, 'python', 'machine learning language', 'oops'),
    new Topic(4, 'html5', 'new features for web development', 'web'),
]

let categories = ['oops', 'lang', 'web']

export default categories;

// export let topics=[
//     new Topic(1,'java','Trending language'),
//     new Topic(2,'c','First choice for compilers'),
//     new Topic(3,'pyhton','Machine learning language'),
//     new Topic(4,'html5','New features for web development'),
// ]