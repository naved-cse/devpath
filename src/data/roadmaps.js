const roadmaps = [
  {
    id: "frontend",
    title: "Frontend Developer",
    description: "Learn HTML, CSS, JavaScript, and modern frameworks to build stunning web interfaces.",
    icon: "Monitor",
    sections:[
      {
        id: "basics",
        title: "The Basics",
        topics: [
          { id: "html", title:"HTML Fundamentals", status:"notstarted"},
          { id: "css", title:"CSS Basics", status:"notstarted"},
          { id: "flexbox", title:"Flexbox", status:"notstarted"},
          { id: "grid", title:"CSS Grid", status:"notstarted"},
        ]
      },
      {
        id: "styling",
        title: "Styling Frameworks",
        topics: [
          { id: "bootstrap", title: "Bootstrap", status:"notstarted"},
          { id: "tailwind", title:"Tailwind CSS", status:"notstarted"},
        ]
      },
      {
        id: "javascript",
        title: "JavaScript",
        topics: [
          { id: "variables", title: "Variables", status: "notstarted" },
          { id: "functions", title: "Functions", status: "notstarted" },
          { id: "arrays", title: "Arrays", status: "notstarted" },
          { id: "objects", title: "Objects", status: "notstarted" },
          { id: "dom", title: "DOM", status: "notstarted" },
          { id: "es6", title: "ES6+", status: "notstarted" }
        ]
      },
      {
        id: "react",
        title: "React",
        topics: [
          { id: "components", title: "Components", status: "notstarted" },
          { id: "props", title: "Props", status: "notstarted" },
          { id: "state", title: "State", status: "notstarted" },
          { id: "hooks", title: "Hooks", status: "notstarted" },
          { id: "router", title: "Router", status: "notstarted" }
        ]
      },
      {
        id: "tools",
        title: "Tools",
        topics: [
          { id: "git", title: "Git", status: "notstarted" },
          { id: "github", title: "GitHub", status: "notstarted" },
          { id: "vscode", title: "VS Code", status: "notstarted" },
          { id: "devtools", title: "Chrome DevTools", status: "notstarted" }
        ]
      }
    ]
  },

  {
  id: "dsa",
  title: "DSA & Problem Solving",
  description: "Strengthen your problem-solving skills and master data structures and algorithms.",
  icon: "Brain",
  sections: [
    {
      id: "arrays",
      title: "Arrays",
      topics: [
        {
          id: "arrays-traversal",
          title: "Array Traversal & Basics",
          questions: [
            { id: 1480, title: "Running Sum of 1d Array", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/running-sum-of-1d-array/" },
            { id: 1672, title: "Richest Customer Wealth", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/richest-customer-wealth/" },
            { id: 1920, title: "Build Array from Permutation", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/build-array-from-permutation/" },
            { id: 1295, title: "Find Numbers with Even Number of Digits", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/find-numbers-with-even-number-of-digits/" },
            { id: 2114, title: "Maximum Number of Words Found in Sentences", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/" },
            { id: 1470, title: "Shuffle the Array", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/shuffle-the-array/" },
            { id: 1299, title: "Replace Elements with Greatest Element on Right Side", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/" },
          ]
        },
        {
          id: "arrays-prefix-sum",
          title: "Prefix Sum",
          questions: [
            { id: 724, title: "Find Pivot Index", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/find-pivot-index/" },
            { id: 303, title: "Range Sum Query - Immutable", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/range-sum-query-immutable/" },
            { id: 1732, title: "Find the Highest Altitude", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/find-the-highest-altitude/" },
            { id: 2574, title: "Left and Right Sum Differences", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/left-and-right-sum-differences/" },
            { id: 1365, title: "How Many Numbers Are Smaller Than the Current Number", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/" },
            { id: 238, title: "Product of Array Except Self", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/product-of-array-except-self/" },
          ]
        },
        {
          id: "arrays-two-pointer",
          title: "Two Pointer",
          questions: [
            { id: 283, title: "Move Zeroes", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/move-zeroes/" },
            { id: 977, title: "Squares of a Sorted Array", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/squares-of-a-sorted-array/" },
            { id: 88, title: "Merge Sorted Array", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/merge-sorted-array/" },
            { id: 167, title: "Two Sum II - Input Array Is Sorted", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
            { id: 15, title: "3Sum", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/3sum/" },
            { id: 16, title: "3Sum Closest", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/3sum-closest/" },
            { id: 189, title: "Rotate Array", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/rotate-array/" },
          ]
        },
        {
          id: "arrays-hashmap",
          title: "Hashmap & Kadane",
          questions: [
            { id: 121, title: "Best Time to Buy and Sell Stock", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
            { id: 122, title: "Best Time to Buy and Sell Stock II", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/" },
            { id: 217, title: "Contains Duplicate", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/contains-duplicate/" },
            { id: 1, title: "Two Sum", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/two-sum/" },
            { id: 53, title: "Maximum Subarray", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/maximum-subarray/" },
            { id: 128, title: "Longest Consecutive Sequence", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/longest-consecutive-sequence/" },
            { id: 31, title: "Next Permutation", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/next-permutation/" },
            { id: 56, title: "Merge Intervals", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/merge-intervals/" },
            { id: 57, title: "Insert Interval", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/insert-interval/" },
            { id: 75, title: "Sort Colors", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/sort-colors/" },
          ]
        },
        {
          id: "arrays-hard",
          title: "Hard Array Problems",
          questions: [
            { id: 41, title: "First Missing Positive", difficulty: "Hard", leetcodeLink: "https://leetcode.com/problems/first-missing-positive/" },
            { id: 42, title: "Trapping Rain Water", difficulty: "Hard", leetcodeLink: "https://leetcode.com/problems/trapping-rain-water/" },
            { id: 84, title: "Largest Rectangle in Histogram", difficulty: "Hard", leetcodeLink: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
          ]
        }
      ]
    },
    {
      id: "sliding-window",
      title: "Sliding Window",
      topics: [
        {
          id: "sliding-fixed",
          title: "Fixed Window",
          questions: [
            { id: 643, title: "Maximum Average Subarray I", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/maximum-average-subarray-i/" },
            { id: 1456, title: "Maximum Number of Vowels in a Substring of Given Length", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/" },
          ]
        },
        {
          id: "sliding-variable",
          title: "Variable Window",
          questions: [
            { id: 3, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
            { id: 424, title: "Longest Repeating Character Replacement", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/longest-repeating-character-replacement/" },
            { id: 567, title: "Permutation in String", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/permutation-in-string/" },
            { id: 904, title: "Fruit Into Baskets", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/fruit-into-baskets/" },
          ]
        },
        {
          id: "sliding-hard",
          title: "Hard Sliding Window",
          questions: [
            { id: 76, title: "Minimum Window Substring", difficulty: "Hard", leetcodeLink: "https://leetcode.com/problems/minimum-window-substring/" },
            { id: 239, title: "Sliding Window Maximum", difficulty: "Hard", leetcodeLink: "https://leetcode.com/problems/sliding-window-maximum/" },
          ]
        }
      ]
    },
    {
      id: "hashing-strings",
      title: "Hashing & Strings",
      topics: [
        {
          id: "strings-basics",
          title: "String Basics & Two Pointer",
          questions: [
            { id: 125, title: "Valid Palindrome", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/valid-palindrome/" },
            { id: 242, title: "Valid Anagram", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/valid-anagram/" },
            { id: 1768, title: "Merge Strings Alternately", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/merge-strings-alternately/" },
            { id: 383, title: "Ransom Note", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/ransom-note/" },
            { id: 205, title: "Isomorphic Strings", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/isomorphic-strings/" },
            { id: 290, title: "Word Pattern", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/word-pattern/" },
            { id: 28, title: "Find the Index of the First Occurrence in a String", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/" },
          ]
        },
        {
          id: "strings-hashmap",
          title: "Hashmap Based String Problems",
          questions: [
            { id: 49, title: "Group Anagrams", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/group-anagrams/" },
            { id: 271, title: "Encode and Decode Strings", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/encode-and-decode-strings/" },
            { id: 451, title: "Sort Characters By Frequency", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/sort-characters-by-frequency/" },
            { id: 443, title: "String Compression", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/string-compression/" },
            { id: 6, title: "Zigzag Conversion", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/zigzag-conversion/" },
            { id: 8, title: "String to Integer (atoi)", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/string-to-integer-atoi/" },
          ]
        }
      ]
    },
    {
      id: "binary-search",
      title: "Binary Search",
      topics: [
        {
          id: "bs-classic",
          title: "Classic Binary Search",
          questions: [
            { id: 704, title: "Binary Search", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/binary-search/" },
            { id: 278, title: "First Bad Version", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/first-bad-version/" },
            { id: 35, title: "Search Insert Position", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/search-insert-position/" },
            { id: 374, title: "Guess Number Higher or Lower", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/guess-number-higher-or-lower/" },
          ]
        },
        {
          id: "bs-rotated",
          title: "Binary Search on Rotated Arrays",
          questions: [
            { id: 33, title: "Search in Rotated Sorted Array", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
            { id: 34, title: "Find First and Last Position of Element in Sorted Array", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
            { id: 153, title: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
            { id: 162, title: "Find Peak Element", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/find-peak-element/" },
          ]
        },
        {
          id: "bs-on-answer",
          title: "Binary Search on Answer",
          questions: [
            { id: 875, title: "Koko Eating Bananas", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/koko-eating-bananas/" },
            { id: 1011, title: "Capacity To Ship Packages Within D Days", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/" },
            { id: 4, title: "Median of Two Sorted Arrays", difficulty: "Hard", leetcodeLink: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
          ]
        }
      ]
    },
    {
      id: "stack-queues",
      title: "Stack & Queues",
      topics: [
        {
          id: "stack-basics",
          title: "Stack Basics",
          questions: [
            { id: 20, title: "Valid Parentheses", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/valid-parentheses/" },
            { id: 155, title: "Min Stack", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/min-stack/" },
            { id: 232, title: "Implement Queue using Stacks", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/implement-queue-using-stacks/" },
            { id: 225, title: "Implement Stack using Queues", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/implement-stack-using-queues/" },
            { id: 150, title: "Evaluate Reverse Polish Notation", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/evaluate-reverse-polish-notation/" },
            { id: 394, title: "Decode String", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/decode-string/" },
            { id: 735, title: "Asteroid Collision", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/asteroid-collision/" },
          ]
        },
        {
          id: "stack-monotonic",
          title: "Monotonic Stack",
          questions: [
            { id: 739, title: "Daily Temperatures", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/daily-temperatures/" },
            { id: 853, title: "Car Fleet", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/car-fleet/" },
            { id: 907, title: "Sum of Subarray Minimums", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/sum-of-subarray-minimums/" },
          ]
        }
      ]
    },
    {
      id: "linked-lists",
      title: "Linked Lists",
      topics: [
        {
          id: "ll-basics",
          title: "Linked List Basics",
          questions: [
            { id: 206, title: "Reverse Linked List", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/reverse-linked-list/" },
            { id: 21, title: "Merge Two Sorted Lists", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/merge-two-sorted-lists/" },
            { id: 876, title: "Middle of the Linked List", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/middle-of-the-linked-list/" },
            { id: 203, title: "Remove Linked List Elements", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/remove-linked-list-elements/" },
            { id: 234, title: "Palindrome Linked List", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/palindrome-linked-list/" },
          ]
        },
        {
          id: "ll-slow-fast",
          title: "Slow & Fast Pointer",
          questions: [
            { id: 141, title: "Linked List Cycle", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/linked-list-cycle/" },
            { id: 142, title: "Linked List Cycle II", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/linked-list-cycle-ii/" },
            { id: 19, title: "Remove Nth Node From End of List", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
          ]
        },
        {
          id: "ll-medium-hard",
          title: "Medium & Hard Linked List",
          questions: [
            { id: 2, title: "Add Two Numbers", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/add-two-numbers/" },
            { id: 138, title: "Copy List with Random Pointer", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/copy-list-with-random-pointer/" },
            { id: 148, title: "Sort List", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/sort-list/" },
            { id: 23, title: "Merge K Sorted Lists", difficulty: "Hard", leetcodeLink: "https://leetcode.com/problems/merge-k-sorted-lists/" },
            { id: 25, title: "Reverse Nodes in k-Group", difficulty: "Hard", leetcodeLink: "https://leetcode.com/problems/reverse-nodes-in-k-group/" },
          ]
        }
      ]
    },
    {
      id: "trees",
      title: "Trees",
      topics: [
        {
          id: "trees-dfs-basics",
          title: "DFS Basics",
          questions: [
            { id: 104, title: "Maximum Depth of Binary Tree", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
            { id: 226, title: "Invert Binary Tree", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/invert-binary-tree/" },
            { id: 101, title: "Symmetric Tree", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/symmetric-tree/" },
            { id: 100, title: "Same Tree", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/same-tree/" },
            { id: 572, title: "Subtree of Another Tree", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/subtree-of-another-tree/" },
            { id: 110, title: "Balanced Binary Tree", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/balanced-binary-tree/" },
            { id: 112, title: "Path Sum", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/path-sum/" },
            { id: 543, title: "Diameter of Binary Tree", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/diameter-of-binary-tree/" },
          ]
        },
        {
          id: "trees-bfs",
          title: "BFS / Level Order",
          questions: [
            { id: 102, title: "Binary Tree Level Order Traversal", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
            { id: 199, title: "Binary Tree Right Side View", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/binary-tree-right-side-view/" },
          ]
        },
        {
          id: "trees-bst",
          title: "BST & LCA",
          questions: [
            { id: 235, title: "Lowest Common Ancestor of a Binary Search Tree", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
            { id: 236, title: "Lowest Common Ancestor of a Binary Tree", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
            { id: 230, title: "Kth Smallest Element in a BST", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
            { id: 98, title: "Validate Binary Search Tree", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/validate-binary-search-tree/" },
            { id: 105, title: "Construct Binary Tree from Preorder and Inorder Traversal", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },
          ]
        },
        {
          id: "trees-hard",
          title: "Hard Tree Problems",
          questions: [
            { id: 124, title: "Binary Tree Maximum Path Sum", difficulty: "Hard", leetcodeLink: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
            { id: 297, title: "Serialize and Deserialize Binary Tree", difficulty: "Hard", leetcodeLink: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
          ]
        }
      ]
    },
    {
      id: "recursion-backtracking",
      title: "Recursion & Backtracking",
      topics: [
        {
          id: "recursion-basics",
          title: "Recursion Basics",
          questions: [
            { id: 509, title: "Fibonacci Number", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/fibonacci-number/" },
            { id: 70, title: "Climbing Stairs", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/climbing-stairs/" },
          ]
        },
        {
          id: "backtracking-subsets",
          title: "Subsets & Combinations",
          questions: [
            { id: 78, title: "Subsets", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/subsets/" },
            { id: 90, title: "Subsets II", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/subsets-ii/" },
            { id: 77, title: "Combinations", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/combinations/" },
            { id: 39, title: "Combination Sum", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/combination-sum/" },
            { id: 40, title: "Combination Sum II", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/combination-sum-ii/" },
          ]
        },
        {
          id: "backtracking-permutations",
          title: "Permutations & Search",
          questions: [
            { id: 46, title: "Permutations", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/permutations/" },
            { id: 47, title: "Permutations II", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/permutations-ii/" },
            { id: 17, title: "Letter Combinations of a Phone Number", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/" },
            { id: 79, title: "Word Search", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/word-search/" },
            { id: 51, title: "N-Queens", difficulty: "Hard", leetcodeLink: "https://leetcode.com/problems/n-queens/" },
            { id: 37, title: "Sudoku Solver", difficulty: "Hard", leetcodeLink: "https://leetcode.com/problems/sudoku-solver/" },
          ]
        }
      ]
    },
    {
      id: "dynamic-programming",
      title: "Dynamic Programming",
      topics: [
        {
          id: "dp-1d",
          title: "1D DP",
          questions: [
            { id: 860, title: "Lemonade Change", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/lemonade-change/" },
            { id: 198, title: "House Robber", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/house-robber/" },
            { id: 213, title: "House Robber II", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/house-robber-ii/" },
            { id: 300, title: "Longest Increasing Subsequence", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/longest-increasing-subsequence/" },
            { id: 152, title: "Maximum Product Subarray", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/maximum-product-subarray/" },
            { id: 139, title: "Word Break", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/word-break/" },
          ]
        },
        {
          id: "dp-knapsack",
          title: "Knapsack Pattern",
          questions: [
            { id: 322, title: "Coin Change", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/coin-change/" },
            { id: 518, title: "Coin Change II", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/coin-change-ii/" },
            { id: 416, title: "Partition Equal Subset Sum", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/partition-equal-subset-sum/" },
            { id: 494, title: "Target Sum", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/target-sum/" },
          ]
        },
        {
          id: "dp-2d",
          title: "2D DP",
          questions: [
            { id: 62, title: "Unique Paths", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/unique-paths/" },
            { id: 64, title: "Minimum Path Sum", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/minimum-path-sum/" },
            { id: 1143, title: "Longest Common Subsequence", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/longest-common-subsequence/" },
            { id: 72, title: "Edit Distance", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/edit-distance/" },
            { id: 309, title: "Best Time to Buy and Sell Stock with Cooldown", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/" },
          ]
        },
        {
          id: "dp-hard",
          title: "Hard DP",
          questions: [
            { id: 1092, title: "Shortest Common Supersequence", difficulty: "Hard", leetcodeLink: "https://leetcode.com/problems/shortest-common-supersequence/" },
            { id: 312, title: "Burst Balloons", difficulty: "Hard", leetcodeLink: "https://leetcode.com/problems/burst-balloons/" },
          ]
        }
      ]
    },
    {
      id: "graphs",
      title: "Graphs",
      topics: [
        {
          id: "graphs-dfs-bfs",
          title: "DFS & BFS on Grid",
          questions: [
            { id: 200, title: "Number of Islands", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/number-of-islands/" },
            { id: 695, title: "Max Area of Island", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/max-area-of-island/" },
            { id: 286, title: "Walls and Gates", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/walls-and-gates/" },
            { id: 994, title: "Rotting Oranges", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/rotting-oranges/" },
            { id: 130, title: "Surrounded Regions", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/surrounded-regions/" },
            { id: 417, title: "Pacific Atlantic Water Flow", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/pacific-atlantic-water-flow/" },
          ]
        },
        {
          id: "graphs-general",
          title: "General Graph Problems",
          questions: [
            { id: 133, title: "Clone Graph", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/clone-graph/" },
            { id: 207, title: "Course Schedule", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/course-schedule/" },
            { id: 210, title: "Course Schedule II", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/course-schedule-ii/" },
            { id: 684, title: "Redundant Connection", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/redundant-connection/" },
          ]
        },
        {
          id: "graphs-shortest-path",
          title: "Shortest Path & Advanced",
          questions: [
            { id: 743, title: "Network Delay Time", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/network-delay-time/" },
            { id: 787, title: "Cheapest Flights Within K Stops", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/cheapest-flights-within-k-stops/" },
            { id: 127, title: "Word Ladder", difficulty: "Hard", leetcodeLink: "https://leetcode.com/problems/word-ladder/" },
            { id: 332, title: "Reconstruct Itinerary", difficulty: "Hard", leetcodeLink: "https://leetcode.com/problems/reconstruct-itinerary/" },
          ]
        }
      ]
    },
    {
      id: "heap",
      title: "Heap & Priority Queue",
      topics: [
        {
          id: "heap-basics",
          title: "Heap Basics",
          questions: [
            { id: 703, title: "Kth Largest Element in a Stream", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/kth-largest-element-in-a-stream/" },
            { id: 1046, title: "Last Stone Weight", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/last-stone-weight/" },
            { id: 973, title: "K Closest Points to Origin", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/k-closest-points-to-origin/" },
            { id: 215, title: "Kth Largest Element in an Array", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
            { id: 621, title: "Task Scheduler", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/task-scheduler/" },
            { id: 355, title: "Design Twitter", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/design-twitter/" },
          ]
        },
        {
          id: "heap-hard",
          title: "Hard Heap Problems",
          questions: [
            { id: 295, title: "Find Median from Data Stream", difficulty: "Hard", leetcodeLink: "https://leetcode.com/problems/find-median-from-data-stream/" },
          ]
        }
      ]
    },
    {
      id: "trie",
      title: "Trie",
      topics: [
        {
          id: "trie-all",
          title: "Trie Problems",
          questions: [
            { id: 208, title: "Implement Trie (Prefix Tree)", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
            { id: 211, title: "Design Add and Search Words Data Structure", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/design-add-and-search-words-data-structure/" },
            { id: 212, title: "Word Search II", difficulty: "Hard", leetcodeLink: "https://leetcode.com/problems/word-search-ii/" },
          ]
        }
      ]
    },
    {
      id: "intervals-greedy",
      title: "Intervals & Greedy",
      topics: [
        {
          id: "greedy-basics",
          title: "Greedy Basics",
          questions: [
            { id: 11, title: "Container With Most Water", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/container-with-most-water/" },
            { id: 55, title: "Jump Game", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/jump-game/" },
            { id: 45, title: "Jump Game II", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/jump-game-ii/" },
            { id: 134, title: "Gas Station", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/gas-station/" },
          ]
        },
        {
          id: "intervals-all",
          title: "Interval Problems",
          questions: [
            { id: 252, title: "Meeting Rooms", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/meeting-rooms/" },
            { id: 253, title: "Meeting Rooms II", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/meeting-rooms-ii/" },
            { id: 435, title: "Non-overlapping Intervals", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/non-overlapping-intervals/" },
            { id: 452, title: "Minimum Number of Arrows to Burst Balloons", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/" },
          ]
        }
      ]
    },
    {
      id: "bit-manipulation",
      title: "Bit Manipulation & Math",
      topics: [
        {
          id: "bit-basics",
          title: "Bit Manipulation Basics",
          questions: [
            { id: 136, title: "Single Number", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/single-number/" },
            { id: 191, title: "Number of 1 Bits", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/number-of-1-bits/" },
            { id: 338, title: "Counting Bits", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/counting-bits/" },
            { id: 190, title: "Reverse Bits", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/reverse-bits/" },
            { id: 268, title: "Missing Number", difficulty: "Easy", leetcodeLink: "https://leetcode.com/problems/missing-number/" },
            { id: 371, title: "Sum of Two Integers", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/sum-of-two-integers/" },
          ]
        },
        {
          id: "math-problems",
          title: "Math Problems",
          questions: [
            { id: 7, title: "Reverse Integer", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/reverse-integer/" },
            { id: 50, title: "Pow(x, n)", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/powx-n/" },
            { id: 43, title: "Multiply Strings", difficulty: "Medium", leetcodeLink: "https://leetcode.com/problems/multiply-strings/" },
          ]
        }
      ]
    }
  ]
},

  {
    id: "backend",
    title: "Backend Developer",
    description: "Learn server-side development, databases, APIs, and scalable system design.",
    icon: "Server",
    sections: [
      {
        id: "nodejs",
        title: "Node.js Basics",
        topics: [
          { id: "intro", title: "What is Node.js", status: "notstarted" },
          { id: "modules", title: "Modules & require", status: "notstarted" },
          { id: "fs", title: "File System", status: "notstarted" },
          { id: "events", title: "Event Loop", status: "notstarted" }
        ]
      },
      {
        id: "express",
        title: "Express.js",
        topics: [
          { id: "routing", title: "Routing", status: "notstarted" },
          { id: "middleware", title: "Middleware", status: "notstarted" },
          { id: "req-res", title: "Request & Response", status: "notstarted" },
          { id: "error-handling", title: "Error Handling", status: "notstarted" }
        ]
      },
      {
        id: "mongodb",
        title: "MongoDB",
        topics: [
          { id: "nosql-basics", title: "NoSQL Basics", status: "notstarted" },
          { id: "mongoose", title: "Mongoose ODM", status: "notstarted" },
          { id: "crud", title: "CRUD Operations", status: "notstarted" },
          { id: "schemas", title: "Schemas & Models", status: "notstarted" }
        ]
      },
      {
        id: "rest-apis",
        title: "REST APIs",
        topics: [
          { id: "http-methods", title: "HTTP Methods", status: "notstarted" },
          { id: "status-codes", title: "Status Codes", status: "notstarted" },
          { id: "postman", title: "Testing with Postman", status: "notstarted" },
          { id: "api-design", title: "API Design Patterns", status: "notstarted" }
        ]
      },
      {
        id: "authentication",
        title: "Authentication",
        topics: [
          { id: "jwt", title: "JWT (JSON Web Tokens)", status: "notstarted" },
          { id: "hashing", title: "Password Hashing (bcrypt)", status: "notstarted" },
          { id: "sessions", title: "Cookies & Sessions", status: "notstarted" },
          { id: "auth-middleware", title: "Auth Middleware", status: "notstarted" }
        ]
      }
    ]
  }

];

export default roadmaps;