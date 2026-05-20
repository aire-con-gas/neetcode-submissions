class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];

        for (const asteroid of asteroids) {
            let survived = true;

            while (survived && asteroid < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {
                const top = stack[stack.length - 1];
                
                if (top < -asteroid) {
                    stack.pop();
                } else if (top === -asteroid) {
                    stack.pop();
                    survived = false;
                } else {
                    survived = false;
                }
            }

            if (survived) {
                stack.push(asteroid);
            }
        }

        return stack;
    }
}
