export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Only POST requests are allowed"
        });
    }

    try {
        const { data } = req.body;

        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                message: "Invalid input. Please send an array inside 'data'."
            });
        }

        // Dummy info from examples
        const FULL_NAME = "john_doe";
        const DOB = "17091999";
        const EMAIL = "john@xyz.com";
        const ROLL_NUMBER = "ABCD123";

        function alternatingCapsReverse(str) {
            return str
                .split("")
                .reverse()
                .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
                .join("");
        }

        const evenNumbers = [];
        const oddNumbers = [];
        const alphabets = [];
        const specialChars = [];
        let sum = 0;

        data.forEach(item => {
            if (/^-?\d+$/.test(item)) {
                const num = parseInt(item);
                sum += num;
                (num % 2 === 0 ? evenNumbers : oddNumbers).push(item);
            } else if (/^[a-zA-Z]+$/.test(item)) {
                alphabets.push(item.toUpperCase());
            } else {
                specialChars.push(item);
            }
        });

        const concatString = alternatingCapsReverse(alphabets.join(""));

        return res.status(200).json({
            is_success: true,
            user_id: `${FULL_NAME}_${DOB}`,
            email: EMAIL,
            roll_number: ROLL_NUMBER,
            odd_numbers: oddNumbers,
            even_numbers: evenNumbers,
            alphabets: alphabets,
            special_characters: specialChars,
            sum: sum.toString(),
            concat_string: concatString
        });
    } catch (err) {
        return res.status(500).json({
            is_success: false,
            message: "Internal Server Error",
            error: err.message
        });
    }
}
