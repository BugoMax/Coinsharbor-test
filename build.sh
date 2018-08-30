#!/bin/bash

echo
echo 'Run test'
echo

if npm run test; then

    echo
    echo 'Tests were passed'
    echo 'Building project...'
    echo

    if npm run build; then

        echo
        echo 'Building project is done.'
        echo
        select yn in "Yes"; do
            case $yn in
                Yes ) exit;;
            esac
        done

    else

        echo
        echo "Building project is failed. Exit?"
        select yn in "Yes"; do
            case $yn in
                Yes ) exit;;
            esac
        done

    fi

else

    echo
    echo "Test was not passed. Exit?"
    select yn in "Yes"; do
        case $yn in
            Yes ) exit;;
        esac
    done

fi
