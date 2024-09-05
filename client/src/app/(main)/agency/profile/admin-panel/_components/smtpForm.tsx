"use client";

import { useEffect, useState } from "react";
import { trpc } from "@/server/client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SMTPConfigForm() {
    const [server, setServer] = useState("");
    const [port, setPort] = useState<number | "">(587);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); // Leave password empty for security reasons
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    // Fetch the current SMTP configuration
    const { data: smtpConfig, isLoading: isFetchingConfig, error: fetchError } = trpc.smtp.getCurrent.useQuery();

    // Populate form fields when the configuration is fetched successfully
    useEffect(() => {
        if (smtpConfig) {
            setServer(smtpConfig.host);
            setPort(smtpConfig.port);
            setUsername(smtpConfig.username);
            // We intentionally leave the password empty for security
        }
    }, [smtpConfig]);

    const createSMTPConfig = trpc.smtp.create.useMutation({
        onSuccess: () => {
            setSuccess(true);
            setError(null);
            setLoading(false);
        },
        onError: (error) => {
            setSuccess(false);
            setError(error.message);
            setLoading(false);
        }
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await createSMTPConfig.mutateAsync({
                host: server,
                port: Number(port),
                username,
                password,
            });
        } catch (error) {
            console.error("Failed to submit SMTP config:", error);
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-[80dvh] flex-col items-center justify-center bg-background px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-md space-y-6">
                <div>
                    <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
                        SMTP Configuration
                    </h2>
                    <p className="mt-2 text-center text-muted-foreground">
                        Set up your email server settings.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {isFetchingConfig ? (
                        <p>Loading current configuration...</p>
                    ) : fetchError ? (
                        <p className="text-red-500">Failed to fetch configuration: {fetchError.message}</p>
                    ) : (
                        <>
                            <div className="space-y-2">
                                <Label htmlFor="server">Server Address</Label>
                                <Input
                                    id="server"
                                    type="text"
                                    placeholder="smtp.example.com"
                                    value={server}
                                    onChange={(e) => setServer(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="port">Port</Label>
                                <Input
                                    id="port"
                                    type="number"
                                    placeholder="587"
                                    value={port}
                                    onChange={(e) => setPort(e.target.value ? Number(e.target.value) : "")}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    id="username"
                                    type="text"
                                    placeholder="your-username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="********"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                {/* You could also add a hint that the password is not shown */}
                                {smtpConfig && <p className="text-sm text-muted-foreground">Password is already set but not shown for security reasons.</p>}
                            </div>
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={loading}
                            >
                                {loading ? "Submitting..." : "Test Connection"}
                            </Button>
                            {success && <p className="text-green-500">SMTP Config created successfully!</p>}
                            {error && <p className="text-red-500">{error}</p>}
                        </>
                    )}
                </form>
            </div>
        </div>
    );
}
