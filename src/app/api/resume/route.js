import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    const filename = "Emmanuel Pedroza - Software Developer.pdf";
    const filePath = path.join(process.cwd(), 'public', filename);

    try {
        const fileBuffer = fs.readFileSync(filePath);

        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="${filename}"`,
            },
        });
    } catch (error) {
        console.error("Error serving resume:", error);
        return new NextResponse("Resume file not found", { status: 404 });
    }
}
