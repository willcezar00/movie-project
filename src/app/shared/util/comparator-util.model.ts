export default class ComparatorUtils {
    static inverse(comparator) { return (a,b) => -comparator(a,b); }
}