import { JitsiMeeting } from '@jitsi/react-sdk';
import { Loader2, X, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface VideoCallProps {
    roomName: string;
    onClose: () => void;
    displayName?: string;
}

const VideoCall = ({ roomName, onClose, displayName }: VideoCallProps) => {
    const [loading, setLoading] = useState(true);
    const [copied, setCopied] = useState(false);

    // Failsafe timeout in case events don't fire
    setTimeout(() => {
        setLoading(false);
    }, 4000);

    const handleCopyLink = () => {
        const link = `https://meet.jit.si/${roomName}`;
        navigator.clipboard.writeText(link);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300">
            <div className="relative w-full max-w-6xl h-[85vh] bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-800">

                {/* Header/Controls */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                    <button
                        onClick={handleCopyLink}
                        className="p-2 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full backdrop-blur-md transition-all duration-300 transform hover:scale-110 shadow-lg flex items-center gap-2 px-4 border border-gray-700"
                        title="Copy Meeting Link"
                    >
                        {copied ? (
                            <>
                                <Check className="w-5 h-5 text-green-400" />
                                <span className="text-sm font-medium text-green-400">Copied</span>
                            </>
                        ) : (
                            <>
                                <Copy className="w-5 h-5" />
                                <span className="text-sm font-medium">Copy Link</span>
                            </>
                        )}
                    </button>

                    <button
                        onClick={onClose}
                        className="p-2 bg-red-500/80 hover:bg-red-600 text-white rounded-full backdrop-blur-md transition-all duration-300 transform hover:scale-110 shadow-lg group"
                        aria-label="Close Video Call"
                    >
                        <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                    </button>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-gray-900 z-0">
                        <div className="relative">
                            <div className="absolute inset-0 bg-purple-500 blur-xl opacity-20 animate-pulse rounded-full"></div>
                            <Loader2 className="w-12 h-12 animate-spin text-purple-500 relative z-10" />
                        </div>
                        <p className="mt-4 text-gray-400 font-medium animate-pulse">Initializing Secure Meeting...</p>
                    </div>
                )}

                <JitsiMeeting
                    domain="meet.jit.si"
                    roomName={roomName}
                    configOverwrite={{
                        startWithAudioMuted: true,
                        disableModeratorIndicator: true,
                        startScreenSharing: false,
                        enableEmailInStats: false,
                        prejoinPageEnabled: false, // Skip prejoin for smoother UX, or keep true if preferred
                        toolbarButtons: [
                            'camera',
                            'chat',
                            'closedcaptions',
                            'desktop',
                            'download',
                            'embedmeeting',
                            'etherpad',
                            'fullscreen',
                            'hangup',
                            'help',
                            'highlight',
                            'microphone',
                            'participants-pane',
                            'profile',
                            'raisehand',
                            'recording',
                            'security',
                            'select-background',
                            'settings',
                            'shareaudio',
                            'sharedvideo',
                            'shortcuts',
                            'stats',
                            'tileview',
                            'toggle-camera',
                            'videoquality',
                        ],
                    }}
                    interfaceConfigOverwrite={{
                        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
                        SHOW_JITSI_WATERMARK: false,
                        SHOW_WATERMARK_FOR_GUESTS: false,
                        TOOLBAR_ALWAYS_VISIBLE: true,
                    }}
                    userInfo={{
                        displayName: displayName || 'Guest User',
                        email: '',
                    }}
                    onApiReady={(externalApi) => {
                        // Function to handle API events if needed
                        externalApi.addEventListener('videoConferenceJoined', () => {
                            setLoading(false);
                        });

                        // Handle hangup event to close the modal
                        externalApi.addEventListener('videoConferenceLeft', () => {
                            onClose();
                        });
                    }}
                    getIFrameRef={(iframeRef) => {
                        iframeRef.style.height = '100%';
                        iframeRef.style.width = '100%';
                        iframeRef.style.background = '#111827'; // Match dark theme
                    }}
                />
            </div>
        </div>
    );
};

export default VideoCall;
