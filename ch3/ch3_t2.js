function recursion(n) {
    if (n > 1) {
        return recursion(n - 2)
    }
    if (n == 0) return "even"
    return "odd"
}