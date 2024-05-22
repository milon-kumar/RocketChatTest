import type { ReactElement } from 'react';
import { Card } from "@rocket.chat/fuselage"
import React from 'react';

const DocumentationCard = (): ReactElement => {
    return (
        <Card>
            <div>
                <h1>Welcome To My Card</h1>
                <p>My Server Pc Configuration </p>
                <pre>
                    Kernel: x86_64 Linux 6.1.89-060189-generic
                    Uptime: 2d 18h 44m
                    Packages: 544
                    Shell: bash 5.1.16
                    Disk: 1.4T / 3.2T (44%)
                    CPU: AMD EPYC 7B13 @ 16x 2.45GHz
                    RAM: 23802MiB / 64041MiB
                </pre>
            </div>
        </Card>
    );
};

export default DocumentationCard;
