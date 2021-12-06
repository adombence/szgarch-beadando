#!/bin/bash

# Set default variables
name=$0
version=1.0
scale_num=10

# Display help
Help() {
	echo ""
	echo
	echo "Syntax: scriptTemplate [-h|v]"
	echo "options:"
	echo "h	Print this Help"
	echo "v	Print software version and exit."
	echo
}

# Display version
Version() {
	echo "${name} - Version: ${version}"
}

while getopts "s:hv" option; do
	case $option in
	h) # Display Help
		Help
		exit
		;;
	v) # Display Version
		Version
		exit
		;;
	\?) # Invalid option
		echo "Error: Invalid option"
		exit
		;;
	esac
done

EQUATION=$1
if [ -z "$EQUATION" ]; then
	echo "error: no EQUATION"
	Help
	exit
fi

# grep: Regex | -q: quiet
while echo $EQUATION | grep  "\n"; do
	#only hexadecimal have A-F, but it work well enough
	VA=$(echo $EQUATION | sed "/\([\d]+[.][\d]+\)|\([\d]+\)|\([\+\-\*\/\^]+\)|\([\(\)]\)*/g" | tr "[a-f]" "[A-F]" | tr "(" "\(" | tr ")" "\)")
	VA=$(echo "ibase=10;$VA" | bc)
	EQUATION=$(echo "$EQUATION" | sed "s/\(.*\)0[dD][A-Fa-f0-9]*/\1$VA/")
	EQUATION=$(echo "$EQUATION" | sed "s/\(.*\)0[dD][A-Fa-f0-9]*/\1$VA/")
done

VA=$(echo "scale=$scale_num;${EQUATION}" | bc)

echo $(echo "base=10;$VA" | bc)
